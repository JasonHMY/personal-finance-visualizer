#!/usr/bin/env python3
"""Print a wholly fictional, current-date budget demo; never read user files."""
import calendar
from datetime import date, datetime, timezone
import json


def make_demo(today=None):
    today = today or datetime.now(timezone.utc).date()
    month = today.year * 12 + today.month - 1
    transactions = []
    start = None
    for offset in range(-3, 1):
        year, zero_month = divmod(month + offset, 12)
        month_number = zero_month + 1
        if start is None:
            start = date(year, month_number, 1)
        for day, amount, category, group, merchant in [
            (2, '84.00', 'Groceries', 'daily', 'Fictional market'),
            (7, '36.00', 'Dining', 'daily', 'Example cafe'),
            (12, '24.00', 'Transport', 'daily', 'Imaginary transit'),
            (16, '48.00', 'Groceries', 'daily', 'Fictional market'),
            (20, '16.00', 'Software', 'fixed', 'Example software'),
            (23, '12.00', 'AI tools', 'ai', 'Imaginary AI service'),
        ]:
            when = date(year, month_number, min(day, calendar.monthrange(year, month_number)[1]))
            if when >= today:
                continue
            transactions.append(dict(id=f'budget-demo-{len(transactions)+1}', date=when.isoformat(),
                                     amount='-'+amount, kind='expense', group=group, category=category,
                                     description=merchant, account='Fictional checking', share=1,
                                     source='Invented budget demonstration'))
    transactions.append(dict(id='budget-demo-pending', date=today.isoformat(),
                             amount='-12.50', kind='expense', group='daily', category='Groceries',
                             description='Fictional pending grocery purchase', account='Fictional checking',
                             share=1, bankStatus='pending', source='Invented budget demonstration'))
    return dict(schemaVersion=1, currency='USD', language='en', demo=True,
                coverage=dict(start=start.isoformat(), end=today.isoformat()),
                transactions=transactions, refunds=[], settlements=[],
                notes=['Every record and setting is invented. The pending purchase is treated as confirmed only in this fictional demonstration.'],
                budget=dict(endpoint=None, defaults=dict(schemaVersion=1, dailyLimit='40.00',
                    currency='USD', timezone='UTC', groups=['daily', 'fixed', 'ai'],
                    allocationMode='history', shares=[])))


if __name__ == '__main__':
    print(json.dumps(make_demo(), ensure_ascii=False, indent=2))

import React, { ReactNode } from 'react';
import { LNProvider } from '../../context/LN';
import { NostrProvider } from '../../context/Nostr';
import { OrderProvider } from '../../context/Order';

export default function PayDeskLayout({ children }: { children: ReactNode }) {
  return (
    <LNProvider>
      <NostrProvider>
        <OrderProvider>{children}</OrderProvider>
      </NostrProvider>
    </LNProvider>
  );
}

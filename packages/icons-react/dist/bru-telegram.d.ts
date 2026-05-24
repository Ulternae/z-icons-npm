import React from 'react';

export interface BruTelegramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruTelegram: React.FC<BruTelegramProps>;
export default BruTelegram;

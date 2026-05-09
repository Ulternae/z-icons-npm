import React from 'react';

export interface MinaBrandTelegramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaBrandTelegram: React.FC<MinaBrandTelegramProps>;
export default MinaBrandTelegram;

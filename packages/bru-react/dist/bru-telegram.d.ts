import React from 'react';

export interface BruTelegramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruTelegram(props: BruTelegramProps): React.ReactElement;
export default BruTelegram;

import React from 'react';

export interface MinaBrandTelegramProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBrandTelegram(props: MinaBrandTelegramProps): React.ReactElement;
export default MinaBrandTelegram;

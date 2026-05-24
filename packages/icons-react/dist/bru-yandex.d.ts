import React from 'react';

export interface BruYandexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYandex: React.FC<BruYandexProps>;
export default BruYandex;

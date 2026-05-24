import React from 'react';

export interface BruYandexInternationalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruYandexInternational: React.FC<BruYandexInternationalProps>;
export default BruYandexInternational;

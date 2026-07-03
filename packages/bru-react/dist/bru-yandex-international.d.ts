import React from 'react';

export interface BruYandexInternationalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYandexInternational(props: BruYandexInternationalProps): React.ReactElement;
export default BruYandexInternational;

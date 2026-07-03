import React from 'react';

export interface BruYandexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruYandex(props: BruYandexProps): React.ReactElement;
export default BruYandex;

import React from 'react';

export interface CoreShredderRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreShredderRegularDuo(props: CoreShredderRegularDuoProps): React.ReactElement;
export default CoreShredderRegularDuo;

import React from 'react';

export interface NeoSuitcaseRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSuitcaseRegularDuo(props: NeoSuitcaseRegularDuoProps): React.ReactElement;
export default NeoSuitcaseRegularDuo;

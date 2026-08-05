import React from 'react';

export interface NeoRectangleTallRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleTallRegularDuo(props: NeoRectangleTallRegularDuoProps): React.ReactElement;
export default NeoRectangleTallRegularDuo;

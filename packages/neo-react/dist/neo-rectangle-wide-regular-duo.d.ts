import React from 'react';

export interface NeoRectangleWideRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleWideRegularDuo(props: NeoRectangleWideRegularDuoProps): React.ReactElement;
export default NeoRectangleWideRegularDuo;

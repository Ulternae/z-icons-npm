import React from 'react';

export interface CorePaintbrushRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaintbrushRegularDuo(props: CorePaintbrushRegularDuoProps): React.ReactElement;
export default CorePaintbrushRegularDuo;

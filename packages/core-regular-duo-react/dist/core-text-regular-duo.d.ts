import React from 'react';

export interface CoreTextRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTextRegularDuo(props: CoreTextRegularDuoProps): React.ReactElement;
export default CoreTextRegularDuo;

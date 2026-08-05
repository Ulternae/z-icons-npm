import React from 'react';

export interface CorePaperPlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePaperPlaneRegularDuo(props: CorePaperPlaneRegularDuoProps): React.ReactElement;
export default CorePaperPlaneRegularDuo;

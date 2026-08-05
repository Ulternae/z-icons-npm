import React from 'react';

export interface NeoPaperPlaneRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoPaperPlaneRegularDuo(props: NeoPaperPlaneRegularDuoProps): React.ReactElement;
export default NeoPaperPlaneRegularDuo;

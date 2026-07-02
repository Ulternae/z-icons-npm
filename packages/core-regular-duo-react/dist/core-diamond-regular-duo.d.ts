import React from 'react';

export interface CoreDiamondRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreDiamondRegularDuo(props: CoreDiamondRegularDuoProps): React.ReactElement;
export default CoreDiamondRegularDuo;

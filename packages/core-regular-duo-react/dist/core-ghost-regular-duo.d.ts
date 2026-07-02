import React from 'react';

export interface CoreGhostRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGhostRegularDuo(props: CoreGhostRegularDuoProps): React.ReactElement;
export default CoreGhostRegularDuo;

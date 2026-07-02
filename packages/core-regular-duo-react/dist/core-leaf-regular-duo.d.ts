import React from 'react';

export interface CoreLeafRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreLeafRegularDuo(props: CoreLeafRegularDuoProps): React.ReactElement;
export default CoreLeafRegularDuo;

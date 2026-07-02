import React from 'react';

export interface CoreCommandRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCommandRegularDuo(props: CoreCommandRegularDuoProps): React.ReactElement;
export default CoreCommandRegularDuo;

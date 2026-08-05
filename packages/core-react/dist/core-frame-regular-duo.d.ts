import React from 'react';

export interface CoreFrameRegularDuoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreFrameRegularDuo(props: CoreFrameRegularDuoProps): React.ReactElement;
export default CoreFrameRegularDuo;

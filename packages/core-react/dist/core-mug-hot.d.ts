import React from 'react';

export interface CoreMugHotProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMugHot(props: CoreMugHotProps): React.ReactElement;
export default CoreMugHot;

import React from 'react';

export interface CoreMugHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMugHotSolid(props: CoreMugHotSolidProps): React.ReactElement;
export default CoreMugHotSolid;

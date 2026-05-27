import React from 'react';

export interface CoreMugHotSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreMugHotSolid: React.FC<CoreMugHotSolidProps>;
export default CoreMugHotSolid;

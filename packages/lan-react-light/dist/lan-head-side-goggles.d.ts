import React from 'react';

export interface LanHeadSideGogglesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideGoggles(props: LanHeadSideGogglesProps): React.ReactElement;
export default LanHeadSideGoggles;

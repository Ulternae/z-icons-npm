import React from 'react';

export interface LanHeadSideHeadphonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHeadSideHeadphones(props: LanHeadSideHeadphonesProps): React.ReactElement;
export default LanHeadSideHeadphones;

import React from 'react';

export interface LanSectionThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSectionThin(props: LanSectionThinProps): React.ReactElement;
export default LanSectionThin;

import React from 'react';

export interface LanCampfireThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCampfireThin(props: LanCampfireThinProps): React.ReactElement;
export default LanCampfireThin;

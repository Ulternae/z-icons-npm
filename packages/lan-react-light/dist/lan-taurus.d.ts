import React from 'react';

export interface LanTaurusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaurus(props: LanTaurusProps): React.ReactElement;
export default LanTaurus;

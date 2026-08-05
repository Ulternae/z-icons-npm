import React from 'react';

export interface LanTaurusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTaurusRegular(props: LanTaurusRegularProps): React.ReactElement;
export default LanTaurusRegular;

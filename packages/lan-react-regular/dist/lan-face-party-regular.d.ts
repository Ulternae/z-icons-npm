import React from 'react';

export interface LanFacePartyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePartyRegular(props: LanFacePartyRegularProps): React.ReactElement;
export default LanFacePartyRegular;

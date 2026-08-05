import React from 'react';

export interface LanEnvelopesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopes(props: LanEnvelopesProps): React.ReactElement;
export default LanEnvelopes;

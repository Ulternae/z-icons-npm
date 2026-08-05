import React from 'react';

export interface LanEnvelopeCircleUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeCircleUser(props: LanEnvelopeCircleUserProps): React.ReactElement;
export default LanEnvelopeCircleUser;

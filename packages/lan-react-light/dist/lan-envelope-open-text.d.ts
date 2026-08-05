import React from 'react';

export interface LanEnvelopeOpenTextProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEnvelopeOpenText(props: LanEnvelopeOpenTextProps): React.ReactElement;
export default LanEnvelopeOpenText;

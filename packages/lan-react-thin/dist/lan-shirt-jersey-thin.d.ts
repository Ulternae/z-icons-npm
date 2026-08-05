import React from 'react';

export interface LanShirtJerseyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanShirtJerseyThin(props: LanShirtJerseyThinProps): React.ReactElement;
export default LanShirtJerseyThin;

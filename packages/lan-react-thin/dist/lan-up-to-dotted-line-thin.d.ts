import React from 'react';

export interface LanUpToDottedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpToDottedLineThin(props: LanUpToDottedLineThinProps): React.ReactElement;
export default LanUpToDottedLineThin;

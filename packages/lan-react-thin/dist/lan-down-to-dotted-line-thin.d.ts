import React from 'react';

export interface LanDownToDottedLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownToDottedLineThin(props: LanDownToDottedLineThinProps): React.ReactElement;
export default LanDownToDottedLineThin;

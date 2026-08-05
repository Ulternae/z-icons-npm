import React from 'react';

export interface LanFileBinaryThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBinaryThin(props: LanFileBinaryThinProps): React.ReactElement;
export default LanFileBinaryThin;

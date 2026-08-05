import React from 'react';

export interface LanFilePenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePenThin(props: LanFilePenThinProps): React.ReactElement;
export default LanFilePenThin;

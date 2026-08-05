import React from 'react';

export interface LanFilePptThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePptThin(props: LanFilePptThinProps): React.ReactElement;
export default LanFilePptThin;

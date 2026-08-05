import React from 'react';

export interface LanFileMidiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMidiThin(props: LanFileMidiThinProps): React.ReactElement;
export default LanFileMidiThin;

import React from 'react';

export interface LanFileMp3ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp3Thin(props: LanFileMp3ThinProps): React.ReactElement;
export default LanFileMp3Thin;

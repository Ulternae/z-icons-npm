import React from 'react';

export interface LanFileMp4ThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMp4Thin(props: LanFileMp4ThinProps): React.ReactElement;
export default LanFileMp4Thin;

import React from 'react';

export interface LanAlignSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignSlashThin(props: LanAlignSlashThinProps): React.ReactElement;
export default LanAlignSlashThin;

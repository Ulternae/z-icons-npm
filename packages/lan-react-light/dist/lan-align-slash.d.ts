import React from 'react';

export interface LanAlignSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlignSlash(props: LanAlignSlashProps): React.ReactElement;
export default LanAlignSlash;

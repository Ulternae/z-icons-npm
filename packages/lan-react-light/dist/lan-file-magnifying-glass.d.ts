import React from 'react';

export interface LanFileMagnifyingGlassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMagnifyingGlass(props: LanFileMagnifyingGlassProps): React.ReactElement;
export default LanFileMagnifyingGlass;

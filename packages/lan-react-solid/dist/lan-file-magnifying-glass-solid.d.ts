import React from 'react';

export interface LanFileMagnifyingGlassSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMagnifyingGlassSolid(props: LanFileMagnifyingGlassSolidProps): React.ReactElement;
export default LanFileMagnifyingGlassSolid;

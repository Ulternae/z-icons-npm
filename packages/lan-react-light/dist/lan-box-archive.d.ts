import React from 'react';

export interface LanBoxArchiveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBoxArchive(props: LanBoxArchiveProps): React.ReactElement;
export default LanBoxArchive;

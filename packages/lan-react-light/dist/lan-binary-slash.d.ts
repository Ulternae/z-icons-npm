import React from 'react';

export interface LanBinarySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBinarySlash(props: LanBinarySlashProps): React.ReactElement;
export default LanBinarySlash;

import React from 'react';

export interface LanVirusSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanVirusSlash(props: LanVirusSlashProps): React.ReactElement;
export default LanVirusSlash;

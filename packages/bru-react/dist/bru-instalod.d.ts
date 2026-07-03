import React from 'react';

export interface BruInstalodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruInstalod(props: BruInstalodProps): React.ReactElement;
export default BruInstalod;

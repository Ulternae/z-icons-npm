import React from 'react';

export interface LanFileMidiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileMidi(props: LanFileMidiProps): React.ReactElement;
export default LanFileMidi;

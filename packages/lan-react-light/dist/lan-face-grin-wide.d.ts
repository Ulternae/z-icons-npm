import React from 'react';

export interface LanFaceGrinWideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinWide(props: LanFaceGrinWideProps): React.ReactElement;
export default LanFaceGrinWide;
